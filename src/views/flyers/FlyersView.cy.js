import FlyersView from './FlyersView.vue'

describe('<FlyersView />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(FlyersView)
  })
})