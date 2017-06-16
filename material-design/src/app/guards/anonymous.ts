import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from "@angular/core";


@Injectable()
export class AnonymousGuard implements CanActivate {

    constructor(private router: Router) {

    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (localStorage.getItem('my_login_token')) {

            this.router.navigate(['/home'])
            return false;
        }

        return true;
    }

}
