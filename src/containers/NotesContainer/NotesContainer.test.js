import React from 'react';
import { shallow } from 'enzyme';
import { NotesContainer, mapStateToProps } from './NotesContainer';

const mockLoading = false;

describe('NotesContainer', () => {
  describe('NotesContainer', () => {
    let wrapper;

    const mockShortid = jest.fn().mockReturnValue('12345789');

    const mockAllNotes = [
        { id: "123ABA",
        title: 'Worf ToDo',
        list: [
          { id: mockShortid,
            text: 'Eat food',
            isComplete: false
          },
        ]
      },
      { id: "987GDGFD",
      title: 'Jake ToDo',
      list: [
        { id: mockShortid,
          text: 'Do basic styling',
          isComplete: false
        },
      ]
    }];

  beforeEach(() => {
    wrapper = shallow(<NotesContainer allNotes={mockAllNotes} loading={mockLoading}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should return JSX when generateNotes is called', () => {
    expect(wrapper.generateNotes).toMatchSnapshot();
  })

  it('should match the snapshot when loading is true', () => {
    wrapper = shallow(<NotesContainer allNotes={[]} loading={false}/>)
    expect(wrapper).toMatchSnapshot();
  })


});

  describe('mapStateToProps', () => {
    it('should return an object with a notes array', () => {
      const mockState = {
        allNotes: [
          { id: "123ABA",
            title: 'Worf ToDo',
            list: [
              { id: "123", text: 'Eat food', isComplete: false },
            ]
          },
          { id: "987GDGFD",
            title: 'Jake ToDo',
            list: [
              { id: "0098", text: 'Do styling', isComplete: false },
            ]
          }
        ],
        error: "",
        loading: false
      }
      const expected = {
        allNotes: [
          { id: "123ABA",
            title: 'Worf ToDo',
            list: [
              { id: "123", text: 'Eat food', isComplete: false },
            ]
          },
          { id: "987GDGFD",
            title: 'Jake ToDo',
            list: [
              { id: "0098", text: 'Do styling', isComplete: false },
            ]
          }
        ],
        loading: false
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })
})
