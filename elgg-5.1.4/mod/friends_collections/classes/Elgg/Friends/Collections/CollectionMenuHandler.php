<?php

namespace Elgg\Friends\Collections;

/**
 * Handle menu item registration
 */
class CollectionMenuHandler {

	/**
	 * Setup collection menu
	 *
	 * @param \Elgg\Event $event 'register' 'menu:friends:collection'
	 *
	 * @return void|\ElggMenuItem[]
	 */
	public function __invoke(\Elgg\Event $event) {
		$collection = $event->getParam('collection');
		if (!$collection instanceof \ElggAccessCollection) {
			return;
		}

		if (!$collection->canEdit()) {
			return;
		}

		$return = $event->getValue();
		
		$return[] = \ElggMenuItem::factory([
			'name' => 'edit',
			'icon' => 'edit',
			'text' => elgg_echo('edit'),
			'href' => elgg_generate_url('edit:access_collection:friends', [
				'collection_id' => $collection->id,
			]),
			'priority' => 500,
		]);

		$return[] = \ElggMenuItem::factory([
			'name' => 'delete',
			'icon' => 'delete',
			'text' => elgg_echo('delete'),
			'href' => elgg_generate_action_url('friends/collections/delete', [
				'collection_id' => $collection->id,
			]),
			'confirm' => true,
			'priority' => 900,
		]);

		return $return;
	}
}
