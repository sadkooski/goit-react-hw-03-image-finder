import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

class Gallery extends Component {
  state = {
    images: [],
    inputSearch: '',
  };

  async componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async () => {
    try {
      // console.log(this.state.inputSearch, 'inputt');
      const response = await fetch(
        `https://pixabay.com/api/?key=36974281-9a9267ae338de1504a0765e3e&q=${this.state.inputSearch}&image_type=photo&pretty=true`
      );

      const data = await response.json();

      this.setState(
        { images: data.hits },
        console.log(this.state.images, 'imagess')
      );
    } catch (error) {
      console.log('errr', error);
    }
  };

  submitHandler = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const inputValue = form.elements.search.value;

    this.setState({ inputSearch: inputValue }, () => {
      this.fetchImages();
    });
  };

  render() {
    console.log(this.state.images, 'zdjęcia sie załadowały?');

    return (
      <div>
        <Searchbar onSubmit={this.submitHandler} />
        {this.state.inputSearch && (
          <ImageGallery gallery={this.state.images}></ImageGallery>
        )}
      </div>
    );
  }
}

export default Gallery;
