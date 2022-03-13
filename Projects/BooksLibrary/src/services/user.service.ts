import { injectable } from 'tsyringe';

@injectable()
export class UserService {
    create = async () => {
        const servicceResponse = {
            name: 'akash jadhav',
            designation: 'software dev',
        };

        return servicceResponse;
    };
}
