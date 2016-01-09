/* 
 *	COMPONENT MODULES
 *	Place each components in their own respective folders. The code
 *	below will automatically load the components into bundle.js
 *
 *	Example directory:
 *
 *	components
 *     │
 *	   ├─ sidebar
 *     │    ├─ SidebarController.js
 *     │    ├─ SidebarService.js
 *     │    └─ Sidebar.html
 *     │
 *     └─ user_profile
 *          ├─ UserProfile.js
 *          └─ UserProfile.html
 */

(function() {
	function requireAll(r) { r.keys().forEach(r); }
	requireAll(require.context('.', true, /\.js$/));
});