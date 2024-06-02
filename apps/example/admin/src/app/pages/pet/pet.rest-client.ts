import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService} from '../../auth/auth.service';
import {Pet} from './types';
import {envConfig} from '../../../config/config';
import {mergeMap, from} from 'rxjs';

@Injectable({ providedIn: 'root',})
export class PetRestClient {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  putPet = (pet: Pet) => {
    return from(this.authService.currentSession()).pipe(
      mergeMap(user => this.http.put(`https://${envConfig.restApiGWDomainName}/prod/pets`, pet,{
        headers: {
          'Authorization': `Bearer ${user.idToken.jwtToken}`
        }
      }))
    )
  };
}
