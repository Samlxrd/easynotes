import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {}

    async signIn(username: string, pass: string): Promise<{acess_token: string}> {
        const user = await this.userService.getUserByUsername(username);
        //const hash = await bcrypt.hash(pass, 10);

        const isMatch = await bcrypt.compare(pass, user[0].password);

        if (!isMatch) {
            throw new UnauthorizedException();
        }
        
        const payload = { sub: user[0].id, username: user[0].username };
        return {
            acess_token: await this.jwtService.signAsync(payload),
        };
    }
}
