/* 
 *	SHARED MODULES
 *	Place each modules in their own respective folders. The code
 *	below will automatically load the modules into bundle.js
 *
 *	Example directory:
 *
 *	shared
 *     │
 *	   ├─ api
 *     │    ├─ ApiPages.js
 *     │    ├─ ApiUsers.js
 *     │    └─ ApiCollections.html
 *     │
 *     └─ utilities
 *          └─ Utilities.js
 */

(function() {
	function requireAll(r) { r.keys().forEach(r); }
	requireAll(require.context('.', true, /\.js$/));
});