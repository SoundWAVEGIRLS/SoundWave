import { beforeEach, expect } from "vitest"
import TitleInfoHome from "./TitleInfoHome"
import {render, screen} from '@testing-library/react'

describe('Component TitleInfoHome', ()=>{

    beforeEach(()=>{
        render(<TitleInfoHome />)
    })

    test('should print the <h1> title of the home page', ()=>{
        expect(screen.getByText('Feel The Music')).toBeDefined()
    })

    test('should print the <h3> subtitle of the home page', ()=>{
        expect(screen.getByText('Stream over 20 thousand songs with one click')).toBeDefined()
    })      

})