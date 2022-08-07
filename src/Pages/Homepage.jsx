import React from 'react'
import FilterSort from './FilterSort'
import MusicRecords from './MusicRecords'
import styled from "styled-components"
const Homepage = () => {
  return (
    <div>
        <MainWrapper>
            <FiltersortWrapper>
<FilterSort/>
</FiltersortWrapper>
<MusicRecordsWrapper>
<MusicRecords/>
</MusicRecordsWrapper>
</MainWrapper>



    </div>
  )
}

export default Homepage

const MainWrapper=styled.div`
display:flex;
height:auto;
`;

const FiltersortWrapper=styled.div`
width:300px;
border:1px solid black;
`;

const MusicRecordsWrapper=styled.div`
width:100%;
border:1px solid black;

`

