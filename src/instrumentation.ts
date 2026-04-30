/**
 * Next.js server instrumentation hook.
 * Runs once at server startup, before any request handling or module evaluation.
 *
 * Problem: Node.js v22+ has an experimental WebStorage API. When Next.js dev
 * server passes `--localstorage-file` without a valid path, Node.js creates a
 * `localStorage` global that EXISTS as an object but has no working methods
 * (getItem, setItem, etc. are not functions). Any third-party package that
 * checks `typeof localStorage !== 'undefined'` and then calls `.getItem()`
 * will crash with "localStorage.getItem is not a function".
 *
 * Fix: if we detect a broken localStorage on the server, replace it with a
 * simple in-memory shim so all packages behave correctly.
 */
export async function register() {
  // Only patch on the server (this file runs in the Node.js runtime)
  if (typeof globalThis.localStorage !== 'undefined') {
    const ls = globalThis.localStorage as Storage

    // Detect broken implementation: object exists but getItem isn't callable
    if (typeof ls.getItem !== 'function') {
      const data: Record<string, string> = {}

      Object.defineProperty(globalThis, 'localStorage', {
        value: {
          getItem: (key: string) => data[key] ?? null,
          setItem: (key: string, value: string) => {
            data[key] = String(value)
          },
          removeItem: (key: string) => {
            delete data[key]
          },
          clear: () => {
            for (const k in data) delete data[k]
          },
          key: (index: number) => Object.keys(data)[index] ?? null,
          get length() {
            return Object.keys(data).length
          },
        } satisfies Storage,
        writable: true,
        configurable: true,
      })
    }
  }
}
