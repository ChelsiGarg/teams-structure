/**
 * Returns the correct asset URL for both local development and GitHub Pages deployment.
 *
 * Why this is needed:
 * - In local development, the app runs at "/" (root)
 * - In GitHub Pages, the app runs at "/<repo-name>/"
 * - Static assets like images must include this base path, otherwise they return 404 in production
 *
 * Vite provides `import.meta.env.BASE_URL` which automatically resolves:
 * - "/" in local
 * - "/teams-structure/" (or your repo name) in production
 *
 * Using this helper ensures:
 * ✅ Images load correctly in both environments
 * ✅ No hardcoding of base paths
 * ✅ Cleaner and reusable code
 *
 * @param path - Relative path inside public folder (e.g. "team-logos/role.png")
 * @returns Full URL with correct base prefix
 */
export const getAssetUrl = (path: string): string => {
  return `${import.meta.env.BASE_URL}${path}`;
};