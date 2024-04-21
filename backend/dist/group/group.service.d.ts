import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { DbconnectionService } from 'src/dbconnection/dbconnection.service';
export declare class GroupService {
    private readonly execute;
    constructor(execute: DbconnectionService);
    create(createGroupDto: CreateGroupDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateGroupDto: UpdateGroupDto): Promise<any>;
    remove(id: number): Promise<any>;
}
