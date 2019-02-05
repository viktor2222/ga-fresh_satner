import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Portfolio from '../styles/portfolio.module.scss'

export default () => (
    <div className="container">
        <div className={Portfolio.new_tab_container}>
            <h2>QUALITY WORK <br/> RECENTLY DONE PROJECT</h2>
            <Tabs className={Portfolio.tabs_container}>
                <TabList className="d-flex">
                <Tab className={Portfolio.tab_item}>ALL</Tab>
                <Tab className={Portfolio.tab_item}>POPULAR</Tab>
                <Tab className={Portfolio.tab_item}>LATEST</Tab>
                <Tab className={Portfolio.tab_item}>FOLLOWING</Tab>
                <Tab className={Portfolio.tab_item}>UPCOMING</Tab>
                </TabList>
            
                <TabPanel>
                <h2>All</h2>
                </TabPanel>
                <TabPanel>
                <h2>POPULAR</h2>
                </TabPanel>
                <TabPanel>
                <h2>LATEST</h2>
                </TabPanel>
                <TabPanel>
                <h2>FOLLOWING</h2>
                </TabPanel>
                <TabPanel>
                <h2>UPCOMING</h2>
                </TabPanel>
            </Tabs>
        </div>
    </div>

);