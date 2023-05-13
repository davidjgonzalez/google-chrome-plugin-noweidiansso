/**
 * No Weidian SSO Injected Script
 * If you see a warning such as
 * `[Intervention] Blocked attempt to show a 'beforeunload' confirmation panel for a frame that never had a user gesture since its load.`
 * It is caused by this script, which is attempting to block redirects behind a dialog.
 * The warning indicates that the script could not be activated.
 * As a safety precaution, to not allow locking in users, this script can only run after the user interacted with the page.
 * So if you interact with the page (by clicking) before the redirect, you will not see this warning.
 */
window.onbeforeunload = function () {
  return "Leave page?";
};