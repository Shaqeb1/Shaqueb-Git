import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './customMap';

const company = new Company();
const user = new User();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
