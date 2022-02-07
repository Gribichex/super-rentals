import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class NavBarComponent extends Component {
    @tracked currentDate = new Date();
}
