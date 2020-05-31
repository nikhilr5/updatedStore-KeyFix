import React from 'react'
import { useSelector } from 'react-redux'
import './index.css'
import AzureRecognition from './AzureRecognition'
import store from '../../store'
import keys from '../AzureTopSpace/AzureOptions/Key'


export default function AzureCaptions(props) {
     const lineWidth = useSelector((state) => state.lineWidth)
     const recording = useSelector((state) => state.recordingAzure)
     var azureKey = '7882896e3ffc4fe3b2f4c055f0914d67'
     // Sloppy styling. Please change.
     var paddingString = (11 - lineWidth) * 3 + 'vw'
     var h = props.height
     var sz = props.textSize
     var wid = "calc(100vh - 2 * " + paddingString + ")"
     if(window.innerHeight > window.innerWidth) {
       wid = "calc(100vw - 2 * " + paddingString + ")"
     }
     try {
       //SpeechSDK.SpeechConfig.CognitiveSubscriptionKeyAuthentication(azureKey)
       return ( <div className="captionsSpace" id="captionsSpace"
            style={{
              fontSize: sz,
              height: h,
              width: wid,
              // backgroundColor: "blue",
              paddingLeft: paddingString,
              paddingRight: paddingString }}>
                 <AzureRecognition isRecording = {recording} key = {azureKey}/>
            </div> )
     } catch (e) {
       console.log('it didnt work yipee!');
       return (<div className="captionsSpace" id="captionsSpace"
            style={{
              fontSize: sz,
              height: h,
              width: wid,
              backgroundColor: "blue",
              paddingLeft: paddingString,
              paddingRight: paddingString }}>
              </div> )

   }

}
