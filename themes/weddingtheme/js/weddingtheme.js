/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

  /**
   * Use this behavior as a template for custom Javascript.
   */
  Drupal.behaviors.weddingtheme = {
    attach: function (context, settings) {
     	$('#fullpage').fullpage({
     		paddingTop: '40px',
        paddingBottom: '40px',
        responsiveWidth: 1025,
        navigation: true,
        navigationTooltips: ['Welcome!', 'How We Met', 'Our Adventures', 'The Proposal', 'Our Registries', 'RSVP'],
        navigationPosition: 'right'
     	});
    }
  };

})(jQuery, Drupal);
