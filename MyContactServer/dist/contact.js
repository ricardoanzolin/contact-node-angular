"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const model_1 = require("./model");
exports.router = express_1.Router();
exports.router.get('/contact', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const repository = yield model_1.getContactRepository();
            const allContacts = yield repository.find();
            res.send(allContacts);
        }
        catch (err) {
            return next(err);
        }
    });
});
exports.router.get('/contact/:id', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const repository = yield model_1.getContactRepository();
            const contact = yield repository.find({ id: req.params.id });
            res.send(contact);
        }
        catch (err) {
            return next(err);
        }
    });
});
exports.router.post('/contact', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const repository = yield model_1.getContactRepository();
            const contact = new model_1.Contact();
            contact.name = req.body.name;
            contact.email = req.body.email;
            contact.phone = req.body.phone;
            contact.twitter = req.body.twitter;
            const result = yield repository.save(contact);
            res.send(result);
        }
        catch (err) {
            return next(err);
        }
    });
});
exports.router.post('/contact/:id', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const repository = yield model_1.getContactRepository();
            const contact = yield repository.findOne({ id: req.params.id });
            contact.name = req.body.name;
            contact.email = req.body.email;
            contact.phone = req.body.phone;
            contact.twitter = req.body.twitter;
            const result = yield repository.save(contact);
            res.send(result);
        }
        catch (err) {
            return next(err);
        }
    });
});
exports.router.delete('/contact/:id', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const repository = yield model_1.getContactRepository();
            yield repository.delete({ id: req.params.id });
            res.send('OK');
        }
        catch (err) {
            return next(err);
        }
    });
});
