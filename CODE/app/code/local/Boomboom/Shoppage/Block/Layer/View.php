<?php
/**
 * Boomboom for Magento 1.5.1.0
 * Made by Shildek (http://shildek.com)
 * Distributed by ThemeForest (http://themeforest.net)
 *
 * @author     Aivaras Prudnikovas
 * @package    base_boomboom
 * @copyright  Copyright 2011 Aivaras Prudnikovas (http://ivarprudnikov.com)
 * @license    All rights reserved.
 * @version    1.0.0
 */

/**
 * Catalog layered navigation view block
 *
 * @category    Mage
 * @package     Mage_Catalog
 * @author      Magento Core Team <core@magentocommerce.com>
 */
class Boomboom_Shoppage_Block_Layer_View extends Mage_Core_Block_Template
{
	/**
     * State block name
     *
     * @var string
     */
    protected $_stateBlockName;

    /**
     * Category Block Name
     *
     * @var string
     */
    protected $_categoryBlockName;

    /**
     * Attribute Filter Block Name
     *
     * @var string
     */
    protected $_attributeFilterBlockName;

    /**
     * Price Filter Block Name
     *
     * @var string
     */
    protected $_priceFilterBlockName;

    /**
     * Decimal Filter Block Name
     *
     * @var string
     */
    protected $_decimalFilterBlockName;

    /**
     * Internal constructor
     */
    protected function _construct()
    {
        parent::_construct();

        $this->_initBlocks();
    }

    /**
     * Initialize blocks names
     */
    protected function _initBlocks()
    {
        $this->_stateBlockName              = 'catalog/layer_state';
        $this->_categoryBlockName           = 'catalog/layer_filter_category';
        $this->_attributeFilterBlockName    = 'catalog/layer_filter_attribute';
        $this->_priceFilterBlockName        = 'catalog/layer_filter_price';
        $this->_decimalFilterBlockName      = 'catalog/layer_filter_decimal';
    }

    /**
     * Get attribute filter block name
     *
     * @deprecated after 1.4.1.0
     *
     * @return string
     */
    protected function _getAttributeFilterBlockName()
    {
        return 'catalog/layer_filter_attribute';
    }

    /**
     * Prepare child blocks
     *
     * @return Mage_Catalog_Block_Layer_View
     */
    protected function _prepareLayout()
    {
        $stateBlock = $this->getLayout()->createBlock($this->_stateBlockName)
            ->setLayer($this->getLayer());

        $categoryBlock = $this->getLayout()->createBlock($this->_categoryBlockName)
            ->setLayer($this->getLayer()->getCurrentCategory()->setIsAnchor(1))
            ->init();

        $this->setChild('layer_state', $stateBlock);
        $this->setChild('category_filter', $categoryBlock);

        $filterableAttributes = $this->_getFilterableAttributes();
        foreach ($filterableAttributes as $attribute) {
            if ($attribute->getAttributeCode() == 'price') {
                $filterBlockName = $this->_priceFilterBlockName;
            } elseif ($attribute->getBackendType() == 'decimal') {
                $filterBlockName = $this->_decimalFilterBlockName;
            } else {
                $filterBlockName = $this->_attributeFilterBlockName;
            }

            $this->setChild($attribute->getAttributeCode() . '_filter',
                $this->getLayout()->createBlock($filterBlockName)
                    ->setLayer($this->getLayer())
                    ->setAttributeModel($attribute)
                    ->init());
        }

        $this->getLayer()->apply();

        return parent::_prepareLayout();
    }

    /**
     * Get layer object
     *
     * @return Mage_Catalog_Model_Layer
     */
    public function getLayer()
    {
        return Mage::getSingleton('catalog/layer');
    }

    /**
     * Get all fiterable attributes of current category
     *
     * @return array
     */
    protected function _getFilterableAttributes()
    {
        $attributes = $this->getData('_filterable_attributes');
        if (is_null($attributes)) {
            $attributes = $this->getLayer()->getFilterableAttributes();
            $this->setData('_filterable_attributes', $attributes);
        }

        return $attributes;
    }

    /**
     * Get layered navigation state html
     *
     * @return string
     */
    public function getStateHtml()
    {
        return $this->getChildHtml('layer_state');
    }

    /**
     * Get all layer filters
     *
     * @return array
     */
    public function getFilters()
    {
        $filters = array();
        if ($categoryFilter = $this->_getCategoryFilter()) {
            $filters[] = $categoryFilter;
        }

        $filterableAttributes = $this->_getFilterableAttributes();
        foreach ($filterableAttributes as $attribute) {
            $filters[] = $this->getChild($attribute->getAttributeCode() . '_filter');
        }

        return $filters;
    }

    /**
     * Get category filter block
     *
     * @return Mage_Catalog_Block_Layer_Filter_Category
     */
    protected function _getCategoryFilter()
    {
        return $this->getChild('category_filter');
    }

    /**
     * Check availability display layer options
     *
     * @return bool
     */
    public function canShowOptions()
    {
        foreach ($this->getFilters() as $filter) {
            if ($filter->getItemsCount()) {
                return true;
            }
        }

        return false;
    }

    /**
     * Check availability display layer block
     *
     * @return bool
     */
    public function canShowBlock()
    {
        return $this->canShowOptions() || count($this->getLayer()->getState()->getFilters());
    }

    /**
     * Retrieve Price Filter block
     *
     * @return Mage_Catalog_Block_Layer_Filter_Price
     */
    protected function _getPriceFilter()
    {
        return $this->getChild('_price_filter');
    }
}
