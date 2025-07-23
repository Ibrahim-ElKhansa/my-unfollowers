'use client';

import React, { useState, useRef, FC } from 'react';

interface FileInputProps {
  label: string;
  placeholder: string;
  onFileSelect: (file: File | null) => void;
  accept?: string;
  isValid?: boolean;
}

const FileInput: FC<FileInputProps> = ({ 
  label, 
  placeholder, 
  onFileSelect, 
  accept = ".json",
  isValid = true
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    onFileSelect(file);
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
    
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
      onFileSelect(file);
      
      // Update the input element
      if (fileInputRef.current) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        fileInputRef.current.files = dataTransfer.files;
      }
    }
  };

  const handleWrapperClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="file-input">
      <label className="file-input__label">{label}</label>
      <div 
        className={`file-input__wrapper ${isDragOver ? 'file-input__wrapper--dragover' : ''} ${selectedFile ? (isValid ? 'file-input__wrapper--has-file' : 'file-input__wrapper--has-error') : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleWrapperClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="file-input__input"
        />
        
        {selectedFile ? (
          <div className="file-input__filename">
            {isValid ? (
              <svg className="file-input__filename-icon file-input__filename-icon--success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="file-input__filename-icon file-input__filename-icon--error" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )}
            <span className="file-input__filename-text">{selectedFile.name}</span>
          </div>
        ) : (
          <div className="file-input__placeholder">
            <svg className="file-input__icon" fill="none" stroke="currentColor" viewBox="0 0 48 48">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" />
            </svg>
            <div>
              <div className="file-input__text file-input__text--primary">
                {placeholder}
              </div>
              <div className="file-input__text file-input__text--secondary">
                Drag and drop or click to browse
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileInput;
