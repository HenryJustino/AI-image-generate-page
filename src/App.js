import { Dialog, Transition, Disclosure, Listbox } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ChevronUpIcon, CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const sampler = [
  { name: 'EulerAncestralDiscreteScheduler' },
  { name: 'UniPCMultistepScheduler' },
  { name: 'DDIMScheduler' },
  { name: 'EulerDiscreteScheduler' },
  { name: 'LMSDiscreteScheduler' },
  { name: 'DPMSolverMultistepScheduler' },
  { name: 'HeunDiscreteScheduler' },
  { name: 'DDPMScheduler' },
  { name: 'PNDMScheduler' },
  { name: 'DPMSolverSinglestepScheduler' },
]

const width = [
  { size: 128 },
  { size: 256 },
  { size: 384 },
  { size: 448 },
  { size: 512 },
  { size: 576 },
  { size: 640 },
  { size: 704 },
  { size: 768 },
  { size: 1024 },
]

function App() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  let [isLoraOpen, setIsLoraOpen] = useState(false)

  function closeLoraModal() {
    setIsLoraOpen(false)
  }

  function openLoraModal() {
    setIsLoraOpen(true)
  }

  let [imageNum, setImageNum] = useState(1)
  let [stepNum, setStepNum] = useState(30)
  let [guidanceScale, setGuidanceScale] = useState(7)
  let [strength, setStrength] = useState(0.5)

  const [selected, setSelected] = useState(sampler[0])

  return (
    <>
      <div className='flex justify-around w-full flex-col md:flex-row'>
        <div className='w-full md:w-1/2 p-10'>
          {/* Modal Start */}
          <p className='text-white mb-3'>Model</p>
          <div className="inset-0 items-center ">
            <button
              type="button"
              onClick={openModal}
              className="rounded-md border-white border-2 bg-transparent px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 w-full flex items-center justify-between"
            >
              <div className="flex items-center">
                <div className="text-sm">
                  Realistic Vision V4
                </div>
              </div>
              <div className="shrink-0 text-white">
                <RightArrowIcon className="h-6 w-6" />
              </div>
            </button>
          </div>


          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-800 bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-zinc-900 p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-white"
                      >
                        Models
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-300">
                          Model Photos...
                          bla bla bla
                        </p>
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Select
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          {/* Modal End */}

          {/* Prompt Start */}
          <p className='text-white mb-2 mt-5'>Prompt</p>
          <textarea className="bg-slate-700	 w-full text-white h-[100px] p-3 text-sm rounded-xl">A photo of a cute golden retriever</textarea>
          <button
            type="button"
            // onClick={}
            className="rounded-md border-white border-2 bg-transparent px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 w-full flex items-center"
          >
            <TwoDiceIcon className="h-6 w-6 m-0.5" />
            Random
          </button>
          {/* Prompt End */}

          {/* Negative Prompt Start */}
          <p className='text-white mb-3'>Negative Prompt</p>
          <textarea className="bg-slate-700	 w-full text-white h-[100px] p-3 text-sm rounded-xl">bla bla bla bla</textarea>
          {/* Negative Prompt End */}

          {/* Generation Settings Start */}
          <div className="w-full  pt-4 flex justify-start">
            <div className="mx-auto w-full rounded-2xl bg-gray-800 p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium text-white  focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 transition-all duration-200">
                      <span>What is your refund policy?</span>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-white transition-transform duration-200`}
                      />
                    </Disclosure.Button>
                    <Transition
                      show={open}
                      enter="transition-all ease-out duration-200"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="transition-all ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                        <p className='text-white mb-3'>Number of images</p>
                        <input type='range' className='w-3/4' step={1} max={0} defaultValue={0} onChange={(e) => setImageNum(e.target.value)} />
                        <span className=' rounded-lg bg-gray-600 px-4 py-1 mx-2'>{imageNum}</span>
                        <p className='text-white mb-3'><a href='https://example.com' className='underline'>Upgrade</a> to generate more images per turn</p>

                        <p className='text-white mb-3'>
                          Number of Inference Steps
                          <QuestionMarkIcon className="h-6 w-6 m-0.5 inline" />
                        </p>
                        <input type='range' className='w-3/4' step={1} max={120} defaultValue={stepNum} onChange={(e) => setStepNum(e.target.value)} />
                        <span className=' rounded-lg bg-gray-600 px-4 py-1 mx-2'>{stepNum}</span>

                        <p className='text-white mb-3'>
                          Guidance Scale
                          <QuestionMarkIcon className="h-6 w-6 m-0.5 inline" />
                        </p>
                        <input type='range' className='w-3/4' step={1} max={20} defaultValue={guidanceScale} onChange={(e) => setGuidanceScale(e.target.value)} />
                        <span className=' rounded-lg bg-gray-600 px-4 py-1 mx-2'>{guidanceScale}</span>

                        {/* Sampler Option Start */}
                        <p className='text-white mb-3 mt-6'>Sampler</p>
                        <div className=" top-16 w-3/4">
                          <Listbox value={selected} onChange={setSelected}>
                            <div className="relative mt-1">
                              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-gray-600 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm text-white">
                                <span className="block truncate">{selected.name}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                  <ChevronUpDownIcon
                                    className="h-5 w-5 text-white"
                                    aria-hidden="true"
                                  />
                                </span>
                              </Listbox.Button>
                              <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className="absolute mt-1 max-h-100 w-full overflow-auto rounded-md bg-gray-600 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-30">
                                  {sampler.map((person, personIdx) => (
                                    <Listbox.Option
                                      key={personIdx}
                                      className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-white'
                                        }`
                                      }
                                      value={person}
                                    >
                                      {({ selected }) => (
                                        <>
                                          <span
                                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                              }`}
                                          >
                                            {person.name}
                                          </span>
                                          {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </Listbox>
                        </div>
                        {/* Sampler Option End */}
                        <Width />
                        <Height />
                        <p className='text-white mb-3 mt-6'>Seed</p>
                        <input type='number' min={-1} defaultValue={-1} className=' w-3/4 cursor-default rounded-lg bg-gray-600 py-2 pl-3 pr-3 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm text-white' />
                        <p className='text-white mb-3 mt-2'>put -1 for random</p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium text-white  focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75 transition-all duration-200">
                      <span>Img2Img & Inpainting</span>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-white transition-transform duration-200`}
                      />
                    </Disclosure.Button>
                    <Transition
                      show={open}
                      enter="transition-all ease-out duration-200"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="transition-all ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-400">
                        <p className='text-white mb-3'>
                          Image Strength
                          <QuestionMarkIcon className="h-6 w-6 m-0.5 inline" />
                        </p>
                        <input type='range' className='w-3/4 mb-4' step={0.1} min={0} max={1} defaultValue={0.5} onChange={(e) => setStrength(e.target.value)} />
                        <span className=' rounded-lg bg-gray-600 px-4 py-1 mx-2 mb-4'>{strength}</span>

                        {/* File Upload Start */}
                        <FileUpload />
                        {/* File Upload End */}

                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium text-white  focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75 transition-all duration-200">
                      <span>Loras</span>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-white transition-transform duration-200`}
                      />
                    </Disclosure.Button>
                    <Transition
                      show={open}
                      enter="transition-all ease-out duration-200"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="transition-all ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-400">
                        <p className='text-white mb-3'>Lora</p>
                        <div className="inset-0 items-center ">
                          <button
                            type="button"
                            onClick={openLoraModal}
                            className="rounded-md border-white border-2 bg-transparent px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 w-full flex items-center justify-between"
                          >
                            <div className="flex items-center">
                              <div className="text-sm">
                                Select a lora
                              </div>
                            </div>
                            <div className="shrink-0 text-white">
                              <RightArrowIcon className="h-6 w-6" />
                            </div>
                          </button>
                        </div>


                        <Transition appear show={isLoraOpen} as={Fragment}>
                          <Dialog as="div" className="relative z-10" onClose={closeLoraModal}>
                            <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <div className="fixed inset-0 bg-gray-800 bg-opacity-25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                              <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                  as={Fragment}
                                  enter="ease-out duration-300"
                                  enterFrom="opacity-0 scale-95"
                                  enterTo="opacity-100 scale-100"
                                  leave="ease-in duration-200"
                                  leaveFrom="opacity-100 scale-100"
                                  leaveTo="opacity-0 scale-95"
                                >
                                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-zinc-900 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                      as="h3"
                                      className="text-lg font-medium leading-6 text-white"
                                    >
                                      Models
                                    </Dialog.Title>
                                    <div className="mt-2">
                                      <p className="text-sm text-gray-300">
                                        Lora Photos...
                                        bla bla bla
                                      </p>
                                    </div>

                                    <div className="mt-4">
                                      <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                                        onClick={closeLoraModal}
                                      >
                                        Select
                                      </button>
                                    </div>
                                  </Dialog.Panel>
                                </Transition.Child>
                              </div>
                            </div>
                          </Dialog>
                        </Transition>

                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-800 px-4 py-2 text-xl font-medium text-gray-300 hover:bg-indigo-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 w-full mt-8"
          // onClick={}
          >
            {/* Generation Settings End */}
            Generate
          </button>
        </div>
        <div className='w-full md:w-1/2 p-20'>
          <p className='text-white mb-3 text-2xl'>Output</p>
          <div className="flex rounded-xl shadow-md w-full h-96 justify-center items-center">
            <div>
              <div className="flex justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dice" viewBox="0 0 24 24" fill="none" stroke="currentColor"  className="h-8 w-8 text-slate-600">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                <circle cx="9" cy="9" r="2"></circle>
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
              </svg>
              </div>
              <div className="flex justify-center">
                <p className="chakra-text text-white css-0">No Images</p>
              </div>
              <div className="flex flex-col mt-2 text-slate-600 text-sm">
                <p className="chakra-text css-0">Generated images will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function RightArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M9 5l7 7-7 7"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TwoDiceIcon(props) {
  return (
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dice" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" color="#fff" {...props}>
      <path fill="currentColor" d="M252.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-184 184c-15.6 15.6-15.6 40.9 0 56.6l184 184c15.6 15.6 40.9 15.6 56.6 0l184-184c15.6-15.6 15.6-40.9 0-56.6l-184-184zM248 224c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24zM96 248c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm128 80c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24zm128-80c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zM224 72c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24zm96 392c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H472.5c13.4 26.9 8.8 60.5-13.6 82.9L320 413.8V464zm160-88c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"></path>
    </svg>
  )
}

function QuestionMarkIcon(props) {
  return (
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-question" className="svg-inline--fa fa-circle-question z-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="#fff" style={{ paddingLeft: '4px', paddingTop: '4px' }} {...props}>
      <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
    </svg>
  )
}

function Width() {
  const [selected, setSelected] = useState(width[0])

  return (
    <>
      <p className='text-white mb-3 mt-6'>Width</p>
      <div className=" top-16 w-3/4">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-gray-600 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm text-white">
              <span className="block truncate">{selected.size}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-100 w-full overflow-auto rounded-md bg-gray-600 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-20">
                {width.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-white'
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                          {person.size}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </>
  )
}

function Height() {
  const [selected, setSelected] = useState(width[0])

  return (
    <>
      <p className='text-white mb-3 mt-6'>Height</p>
      <div className=" top-16 w-3/4">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-gray-600 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm text-white">
              <span className="block truncate">{selected.size}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-100 w-full overflow-auto rounded-md bg-gray-600 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                {width.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-white'
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                          {person.size}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </>
  )
}

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <div className="flex items-center justify-center w-full">
        <label htmlFor="dropzone-file" className="relative flex flex-col items-center justify-center w-full border-2 border-dashed rounded-lg cursor-pointer bg-gray-800 hover:bg-gray-700 border-gray-600 hover:border-gray-500"
          style={{ width: "500px" }}>
          {selectedFile ?
            <img src={selectedFile} style={{ maxWidth: "100%", maxHeight: "auto" }} className="object-cover m-auto" alt="Uploaded file" /> :
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p className="mb-2 text-sm text-gray-400"><span className="font-semibold">Click to upload</span></p>
            </div>
          }
          <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
        </label>
      </div>
    </>
  )
}

export default App;
