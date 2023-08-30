"use client"

import { useState, useEffect, SetStateAction, ChangeEvent, JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode } from 'react'
import config from '../../next.config'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const getLink = (path: string) => `${config.basePath}${path}`;
  const [en, setEn] = useState<any>(null)
  const [search, setSearch] = useState('')
  const [transLang, setTransLang] = useState<any>(null)
  const [currentTab, setCurrentTab] = useState('agents')
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData('en')
      setEn(data)
    }
    fetchData()
  }, [])

  async function getData(path: string) {
    const res = await fetch(getLink('/locales/' + path + '/common.json'))
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }  

  const setSearchValue = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value)
  }
  const getLang = async () => {
    setTransLang(null)
    try {
      const data = await getData(search)
      setTransLang(data)
    } catch(e) {
      setTransLang(null)
    }
  }

  const updateLang = (top: string, key: string, e: ChangeEvent<HTMLInputElement>) => {
    if (Object.keys(transLang).length > 0) {
      let current = {
        ...transLang
      }
      current[top][key] = e.target.value
      setTransLang(current)
    }
  }

  const tabs = () => {
    const tabs = en && Object.keys(en)
    return (
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            defaultValue={tabs && tabs.find((tab: string) => tab === currentTab)}
          >
            {tabs && tabs.map((tab: string | null | undefined) => (
              <option key={tab || 'tab'}>{tab}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="isolate flex flex-col divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
            {tabs && tabs.map((tab: string) => (
              <button
                type="button"
                key={tab || 'buttontab'}
                onClick={() => setCurrentTab(tab)}
                className={classNames(
                  tab === currentTab ? 'text-gray-900 bg-gray-100' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50 bg-white',
                  'group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-center text-sm font-medium focus:z-10'
                )}
                aria-current={tab === currentTab ? 'page' : undefined}
              >
                <span>{tab}</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    tab === currentTab ? 'bg-blue-500' : 'bg-transparent',
                    'absolute inset-y-0 left-0 w-1'
                  )}
                />
              </button>
            ))}
          </nav>
        </div>
      </div>
    )
  }

  function downloadObjectAsJson(exportObj: null, exportName: string){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, "\t"));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className='relative flex mb-10 w-full max-w-lg'>
        <input type='text' className='w-full rounded-l-md border-transparent' onChange={setSearchValue} placeholder='i.e. de or de-AT' />
        <button className='inline-flex items-center gap-x-1.5 rounded-r-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500' type='button' onClick={getLang}>Search</button>
        <button className='ml-10 inline-flex items-center gap-x-1.5 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500' type='button' onClick={() => downloadObjectAsJson(transLang, 'common')}>Export</button>
        <div className='text-xs absolute -top-6 left-0'>Set country code to translate</div>
      </div>
      <div className='flex rounded-lg overflow-hidden w-full max-w-7xl'>
        <div className='w-full max-w-xs'>
        {en && tabs()}
        </div>
        <div className='w-full flex-grow bg-gray-100 p-3'>
      {en && Object.keys(en).map(top => Object.keys(en[top]).map(key => (
        <div key={top + '.' + key} className={classNames('flex flex-col bg-gray-50 mb-3 p-2 px-10', top === currentTab ? '' : 'hidden')}>
          <div className='opacity-60 text-xs'>{en[top][key]}</div>
          {transLang && (
            <div className="relative mt-2">
              <input type="text" className='peer block w-full border-0 bg-gray-50 p-0 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6' defaultValue={transLang[top][key]} onChange={(e) => updateLang(top, key, e)} />
              <div
          className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-blue-500"
          aria-hidden="true"
        />
            </div>
            )}
          </div>
      )))}
      </div>
      </div>
    </main>
  )
}
