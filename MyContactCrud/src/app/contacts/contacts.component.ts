import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ContactsService } from './contacts.service';
import { Contact } from './contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'phone', 'twitter', 'edit', 'delete'];
  dataSource = new MatTableDataSource<any>();

  selectedContact: Contact = new Contact();
  loading = false;

  constructor(public contactService: ContactsService) {
  }

  ngOnInit() {
    this.refresh();
  }

  async refresh() {
    this.loading = true;
    const data = await this.contactService.getContacts();
    this.dataSource.data = data;
    this.loading = false;
  }

  async updateContact() {
    if (this.selectedContact.id !== undefined) {
      await this.contactService.updateContact(this.selectedContact);
    } else {
      await this.contactService.createContact(this.selectedContact);
    }
    this.selectedContact = new Contact();
    await this.refresh();
  }

  editContact(contact: Contact) {
    this.selectedContact = contact;
  }

  clearContact() {
    this.selectedContact = new Contact();
  }

  async deleteContact(contact: Contact) {
    this.loading = true;
    if (confirm(`Você tem certeza que deseja deletar? ${contact.name}. Isto não pode ser desfeito.`)) {
      this.contactService.deleteContact(contact.id);
    }
    await this.refresh();
  }
}