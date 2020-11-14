/* ==========================================================================
   JS for demo purpose only
   ========================================================================== */

/**
 * To highlight the currect page in the menu/submenu, you need to add the class
 * of selected to the element in the menu or submenu.
 *
 * For demo purposes, we are manually highlight the first elements in the menu
 * and mobile menu by adding the class .selected
 */

$('.js-main-menu .js-select-current-parent').first().addClass('selected')
$('.js-mobile-menu .js-select-current-parent').first().addClass('selected')
$('.js-submenu-make-visible').first().addClass('visible js-submenu-visible')
$('.js-submenu-make-visible > .js-select-current').first().addClass('selected')
