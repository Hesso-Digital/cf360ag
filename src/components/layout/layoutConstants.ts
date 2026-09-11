/**
 * Viewport width below which expanded utilities overlay the work area
 * instead of shrinking it. Summary expand/collapse is user-controlled only.
 */
export const UTILITIES_OVERLAY_BREAKPOINT = 1600;

export const UTILITIES_PANEL_WIDTH = 320;

export type UtilitiesMode = "rail" | "docked" | "overlay";

/**
 * - rail: user collapsed utilities
 * - overlay: utilities expanded and viewport is tight (does not push work area)
 * - docked: utilities expanded and viewport is wide enough (pushes work area)
 */
export function resolveUtilitiesMode(
  expanded: boolean,
  viewportWidth: number,
): UtilitiesMode {
  if (!expanded) return "rail";
  if (viewportWidth < UTILITIES_OVERLAY_BREAKPOINT) return "overlay";
  return "docked";
}
