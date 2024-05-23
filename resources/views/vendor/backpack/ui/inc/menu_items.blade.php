{{-- This file is used for menu items by any Backpack v6 theme --}}
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('dashboard') }}"><i class="la la-home nav-icon"></i> {{ trans('backpack::base.dashboard') }}</a></li>

<x-backpack::menu-item title="Users" icon="la la-question" :link="backpack_url('user')" />
<x-backpack::menu-item title="Surveys" icon="la la-question" :link="backpack_url('survey')" />
<x-backpack::menu-item title="Survey question answers" icon="la la-question" :link="backpack_url('survey-question-answers')" />
<x-backpack::menu-item title="Survey questions" icon="la la-question" :link="backpack_url('survey-questions')" />
<x-backpack::menu-item title="Survey answers" icon="la la-question" :link="backpack_url('survey-answers')" />