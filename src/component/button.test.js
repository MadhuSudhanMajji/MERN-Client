import react from 'react'
import {render, fireEvent} from '@testing-library'
import '@testing-library/jest-dom';
import Button from'./button';

test('Render button with Label',()=>{
    const {getByText}=render(
    <Button  label="clickme"/>)
    const buttonElement = getByText('click me');
    expect(buttonElement).toBeInTheDocument();

})

//className=btn
test('ClassName btn present',()=>{
    const {container}=render(
        <Button label="Click me"/>
    )
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toHaveClass('btn');
})

//fireEvent to click my button

test('Button is clicked',()=>{
    const onClickMock=jest.fn();
    const button = render(
    <Button label="Click me" 
    onClick={onClickMock}/>)
    const buttonElement = button.getByText('Click me');
    fireEvent.click(buttonElement)//simulate the button click
    expect(onClickMock).toHaveBeenCalledTimes(2);
})