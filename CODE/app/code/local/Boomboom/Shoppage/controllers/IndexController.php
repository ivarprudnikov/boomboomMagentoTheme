<?php

/**
 * shoppage index controller
 *
 * @category   Mage
 * @package    Mage_Cms
 * @author     Magento Core Team <core@magentocommerce.com>
 */
 
class Boomboom_Shoppage_IndexController extends Mage_Core_Controller_Front_Action
{
    /*
     * Renders shoppage
     */
    public function indexAction()
    {
		$this->loadLayout();
		$this->renderLayout();
    }
	
}
