import { InMemoryDbService } from 'angular-in-memory-web-api';
import { createTestCustomers} from './test-data';

//a fake database define the data
export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const states = ['AB','BC','California','Illinois','Jalisco','Quebec','ON'];
        return { customers: createTestCustomers(),
            states 
        };
    }
}