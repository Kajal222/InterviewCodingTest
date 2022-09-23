import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

 const PaginationComponent = ({pageCalled}) => {
  
    return (
      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink previous  />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={()=>{pageCalled(1)}}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={()=>{pageCalled(2)}}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={()=>{pageCalled(3)}}>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={()=>{pageCalled(4)}}>
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={()=>{pageCalled(5)}}>
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next onClick={()=>{pageCalled('next')}} />
        </PaginationItem>
      </Pagination>
    );
  
}
export default PaginationComponent