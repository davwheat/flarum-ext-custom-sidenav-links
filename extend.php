<?php

/*
 * This file is part of davwheat/custom-sidenav-links.
 *
 * Copyright (c) 2021 David Wheatley.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Davwheat\CustomSidenavLinks;

use Flarum\Extend;
use FoF\Extend\Extend as FoFExtend;

return [
  (new Extend\Frontend('forum'))->js(__DIR__ . '/js/dist/forum.js')->css(__DIR__ . '/less/forum.less'),

  (new Extend\Frontend('admin'))->js(__DIR__ . '/js/dist/admin.js')->css(__DIR__ . '/less/admin.less'),

  new Extend\Locales(__DIR__ . '/locale'),

  (new FoFExtend\ExtensionSettings())->addKey('davwheat-custom-sidenav-links.link-data'),
];
