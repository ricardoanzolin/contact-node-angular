import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';

const baseUrl = 'http://localhost:4201';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) {
  }

  private async request(method: string, url: string, data?: any) {
    //const token = await this.oktaAuth.getAccessToken();

    console.log('request ' + JSON.stringify(data));
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
    });
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }

  getContacts() {
    return this.request('get', `${baseUrl}/contact`);
  }

  getContact(id: string) {
    return this.request('get', `${baseUrl}/contact/${id}`);
  }

  createContact(contact: Contact) {
    console.log('createContact ' + JSON.stringify(contact));
    return this.request('post', `${baseUrl}/contact`, contact);
  }

  updateContact(contact: Contact) {
    console.log('updateContact ' + JSON.stringify(contact));
    return this.request('patch', `${baseUrl}/contact/${contact.id}`, contact);
  }

  deleteContact(id: string) {
    return this.request('delete', `${baseUrl}/contact/${id}`);
  }
}