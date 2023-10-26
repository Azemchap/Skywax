import React from 'react'
import { FaPaperPlane } from 'react-icons/fa6'
import { experimental_useFormStatus as useFormStatus } from "react-dom"

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <>
      <button disabled={pending}
        type="submit"
        className="flex items-center gap-2 w-full justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#fc8739] hover:bg-[#f89452] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e7803b] cursor-pointer"
      >
        {pending ? (
          <div className='w-4 h-4 animate-spin rounded-full border-b-2 border-gray-200'></div>
        ) : (
          <>
            Submit <FaPaperPlane className='w-4' />
          </>
        )}
      </button>
    </>
  )
}

export default SubmitBtn