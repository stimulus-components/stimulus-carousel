# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2020-12-05

### Added

- Support for Stimulus 2.0

### Changed

- **Breaking** Using the new `values` static property

```diff
- <div data-controller="carousel" class="swiper-container" data-carousel-options="{'direction': 'vertical'}">
+ <div data-controller="carousel" class="swiper-container" data-carousel-options-value='{"direction": "vertical"}'>
```

## [1.0.2] - 2020-11-13

### Changed
- Don't import css in the js file.

## [1.0.1] - 2020-11-12

### Changed
- Destroy the `swiper` instance on disconnect.

## [1.0.0] - 2020-11-11

### Added

- Adding controller
