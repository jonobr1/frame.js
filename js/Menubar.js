/**
 * @author mrdoob / http://mrdoob.com/
 */

import { MenubarSaveIcon } from './MenubarSaveIcon.js';
import { MenubarFile } from './MenubarFile.js';
import { MenubarEdit } from './MenubarEdit.js';
import { MenubarExamples } from './MenubarExamples.js';
import { MenubarHelp } from './MenubarHelp.js';

function Menubar( editor ) {

	var container = new UI.Panel();
	container.setId( 'menubar' );

	var saveIcon = new MenubarSaveIcon( editor );

	container.add( saveIcon );
	container.add( new MenubarFile( editor ) );
	container.add( new MenubarEdit( editor ) );
	container.add( new MenubarExamples( editor ) );
	container.add( new MenubarHelp( editor ) );

	container.markClean = function() {

		saveIcon.removeClass(saveIcon.DirtyMarker);

	};
	container.markDirty = function() {

		saveIcon.addClass(saveIcon.DirtyMarker);

	}

	return container;

}

export { Menubar };
