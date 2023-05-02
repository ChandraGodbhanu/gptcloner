import { PlusIcon } from '@heroicons/react/24/solid'
import '@/styles/globals.css'


function NewChat() {
  return ( 
    <div className=' border-grey-700 border  chatRow'>
        <PlusIcon className='h-4 w-4'/>
        <p>new chat</p>
    </div>
    
  )
}

export default NewChat