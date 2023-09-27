import request from "supertest";
import { app, server } from "../app.js";
import db from '../database/db.js'
//import { response } from "express";
//import BrandModel from "../models/brandModel.js"


describe ("test CRUD brands",()=>{


    //------------ GET TEST -------------------

    describe ("GET /brands",()=>{
        let response;
        beforeEach(async()=>{
            response = await request(app).get('/brand').send()
        })
        test('should return a response with status 200 and type json', async() => {            
			expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })
        test('should return all brands', async() => {            
            expect(response.body).toBeInstanceOf(Object)
        })        
    })


    //------------ POST TEST -------------------

    describe('POST /brands',() =>{ 

        const newBrand = {
            brand_name: "test",
        }

        const wrongBrand = {
            wrong_field:'test'
        }

        test('should return a response with status 200 and type json', async () =>{
            const response = await request(app).post('/brand').send(newBrand)
            expect(response.status).toBe(200)
            expect(response.headers['content-type']).toContain('json')
        });

        test('should return a message brand created successfully', async () =>{
            const response = await request(app).post('/brand').send(newBrand)
            expect(response.body.message).toContain("You have created a new brand!")
        })

        test('should return a message insertion error If post wrong brand ', async () =>{
            const response = await request(app).post('/brand').send(wrongBrand)
            expect(response.status).toBe(500);
            expect(response.body.message).toContain("Field 'brand_name' doesn't have a default value")
        })
    })



    afterAll(()=>{
        server.close()
        db.close()
    })


})