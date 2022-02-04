import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  intl: service(),
  beforeModel() {
    this._super(...arguments);
    let language = window.navigator.userLanguage || window.navigator.language;
    this.intl.setLocale([language]);
  },
});
