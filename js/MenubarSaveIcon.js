/**
 * @author jonobr1 / http://jonobr1.com/
 */

var DirtyMarker = 'dirty';

function MenubarSaveIcon( editor ) {

  var container = new UI.Div();

  container.setId( 'save-icon' );
  container.setClass( 'menu' );

  container.DirtyMarker = DirtyMarker;

  return container;

}

export { MenubarSaveIcon };
