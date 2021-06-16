import React from 'react'
import App from '../index'
import {mount} from '@cypress/react'

describe('***App Entry Point***', ()=>{
    it('~ App Mount Status ~', ()=>{
        mount(<App />)
        cy.get('[data-testid =app]').should('exist')
    })
})