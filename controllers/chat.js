const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const chat = require('../models/chat');

router.post('/:authorID/:recipientID/submit', async(req, res, next) => {
  const data = {
    content: req.body.content,
    authorID: req.params.authorID,
    recipientID: req.params.recipientID
  } 
  try {
   const chatData = await chat.create(data)
        console.log(data)
        return res.status(200).send({
          success: true,
          message: chatData
      })
    } catch (error){
        return res.status(400).send({
            success: false,
            message: error
        })
    }
  })

  router.get('/:authorID/:recipientID/all', async(req, res, next) => {
      try {
    const chatData = await chat.find({authorID: req.params.authorID, recipientID: req.params.recipientID})
        return res.status(200).send({
            success: true,
            message: chatData
        })
      } catch(error){
          return res.status(400).send({
              success: false,
              message: error
          })
      }
  })

  module.exports = router