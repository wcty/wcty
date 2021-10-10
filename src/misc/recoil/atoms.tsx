import { atom } from 'recoil';
import { Viewport, ViewportChangeMethodProps } from '@urbica/react-map-gl'
import { Users, Maybe, InitiativesNearbyQuery, InitiativesLastVisitedQuery } from 'generated'
import { defineLang } from '../i18n'
import { explore, FeedEntry, loadMore } from '../'


export const offsetAtom = atom({
  key: 'offset',
  default: 0,
});

export const lockKeys = atom({
  key: 'lockKeys',
  default: false,
});

export const markerAtom = atom({
  key: 'marker',
  default: null,
});

export const selectedAtom = atom({
  key: 'selected',
  default: null,
});

export const nextAtom = atom({
  key: 'next',
  default: [] as InitiativesNearbyQuery['initiatives_nearby'],
});

export const lastAtom = atom({
  key: 'last',
  default: [] as InitiativesLastVisitedQuery['initiative_visits'],
});

export const ownAtom = atom({
  key: 'own',
  default: [] as InitiativesNearbyQuery['initiatives_nearby'],
});

export const initiativeFeed = atom({
  key: 'initiativeFeed',
  default: [{ id:'explore' }] as FeedEntry[],
});

export const indexAtom = atom({
  key: 'index',
  default: 0,
});

export const loadMoreLast = atom({
  key: 'loadMoreLast',
  default: false,
});

export const loadMoreNext = atom({
  key: 'loadMoreNext',
  default: false,
});

export const initiativeBarAtom = atom({
  key: 'initiativeBar',
  default: false,
})

export const joiningAtom = atom({
  key: 'joining',
  default: false,
})

export const expanded = atom({
  key: 'expanded',
  default: false,
})

export const initiative = atom({
  key: 'initiative',
  default: false,
})

export const selectType = atom({
  key: 'selectType',
  default: undefined as 'project'|'donate'|'volunteer'|undefined,
})

export const selectedProject = atom({
  key: 'selectedProject',
  default: null,
})

export const lang = atom({
  key: 'language',
  default: defineLang(), 
})

export const showBarAtom = atom({
  key: 'showBar',
  default: true,
})

export const replyAtom = atom({
  key: 'reply',
  default: {},
})

export const replyFieldAtom = atom({
  key: 'replyField',
  default: undefined,
})
