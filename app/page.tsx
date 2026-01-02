import EventCard from '@/components/EventCard'
import ExploreBtn from '@/components/ExploreBtn'
import { title } from 'process'
import events from '@/lib/constants'
import React from 'react'

const page = () => {

  return (
    <section >
      <h1 className='text-center'>The Hub for every <br /> Event You Can't Miss</h1>
      <p className='text-center mt-5'>Hackathons, Meetups and Conferences, All in One Place</p>
      <ExploreBtn />
      <div className='mt-20 space-y-2'>
        <h3>Featured Event</h3>
        <ul className='events list-nonex  '>
          {
             events.map((event)=>(
              <li key={event.title} className='list-none'>
                  <EventCard {...event}/>
              </li>

              )
              
            )
          }
        </ul>
      </div>
    </section>
  )
}

export default page