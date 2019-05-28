import { TokensService } from './tokens.service';
export declare class TokensController {
    private tokenService;
    constructor(tokenService: TokensService);
    getOne(headers: any, response: any): void;
    update(headers: any, response: any): void;
    create(headers: any, response: any): void;
}
