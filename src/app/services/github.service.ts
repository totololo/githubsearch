import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username : string;
    private client_id ='b3ca1b06e540dfa66b92';
    private client_secret='fd9a80335cfcc5bc259d089a83704b760ccfff48';
    constructor(private _http : Http ){
        console.log('github service ready ...;');
        this.username='totololo';

    }
    //getting user function
    getUser(){
        return this._http.get('https://api.github.com/users/'+
        this.username+'?client_id'+this.client_id+'&client_secret'+this.client_secret).map(res=>res.json());
    }
    //Getting repository function by http request 
    getRepos(){
        return this._http.get('https://api.github.com/users/'+
        this.username+'/repos?client_id'+this.client_id+'&client_secret'+this.client_secret).map(res=>res.json());
    }
}
