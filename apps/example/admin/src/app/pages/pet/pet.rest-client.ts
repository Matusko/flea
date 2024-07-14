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

  putPet = (item: {type: string, payload: Pet}) => {
    return from(this.authService.currentSession()).pipe(
      mergeMap(user => this.http.put(`https://${envConfig.restApiGWDomainName}/prod/pets`, item,{
        headers: {
          'Authorization': `Bearer ${user.idToken.jwtToken}`
        }
      }))
    )
  };

  listPets = () => {
    return from(this.authService.currentSession()).pipe(
      mergeMap(user => this.http.get(`https://${envConfig.restApiGWDomainName}/prod/pets`,{
        headers: {
          'Authorization': `Bearer ${user.idToken.jwtToken}`
        }
      }))
    )
  };
}
