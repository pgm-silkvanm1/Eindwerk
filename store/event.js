import { getField, updateField } from 'vuex-map-fields'
export const state = () => ({
  fields: {
    eventType: '',
    eventDate: null,
    numPersons: '',
    timespan: '',
    eventOptions: [],
    name: '',
    phone: '',
    email: '',
    message: '',
  },
  eventTypes: [
    {
      title: 'Feest',
      value: 'feest',
      icon: 'party-icon',
    },
    {
      title: 'Moment',
      value: 'moment',
      icon: 'moment-icon',
    },
    {
      title: 'Business',
      value: 'business',
      icon: 'business-icon',
    },
  ],
})

export const getters = {
  getField,
}

export const mutations = {
  updateField,
}
