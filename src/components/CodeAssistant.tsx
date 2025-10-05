import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface CodeSnippet {
  id: string
  title: string
  language: string
  code: string
  description: string
}

const CodeAssistant: React.FC = () => {
  const [prompt,
